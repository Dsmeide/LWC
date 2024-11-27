public class CreateCaseAndRoute {

    // Define the input parameter for the invocable method
    public class CaseInput {
        @InvocableVariable(label='Subject' required=true)
        public String subject;

        @InvocableVariable(label='Description' required=true)
        public String description;

        @InvocableVariable(label='Priority' required=true)
        public String priority;

        @InvocableVariable(label='Type' required=true)
        public String type;

        @InvocableVariable(label='Origin' required=true)
        public String origin;
    }

    // Define the output parameter for the invocable method
    public class CaseOutput {
        @InvocableVariable(label='Case Id')
        public Id caseId;

        @InvocableVariable(label='Response Message')
        public String responseMessage;
    }

    // Define the invocable method
    @InvocableMethod(label='Create and Route Case' description='Creates a new Case and routes it to the appropriate queue')
    public static List<CaseOutput> createAndRouteCase(List<CaseInput> inputs) {
        List<CaseOutput> outputs = new List<CaseOutput>();

        // Get the Queue Id for BananaSmoothy queue
        Group queueGroup = [SELECT Id FROM Group WHERE DeveloperName = 'BananaSmoothy' LIMIT 1];
        Id bananaQueueId = queueGroup.Id;

        // Loop through each input record
        for (CaseInput input : inputs) {
            CaseOutput output = new CaseOutput();
            try {
                // Create new Case
                Case newCase = new Case(
                    Subject = input.subject,
                    Description = input.description,
                    Priority = input.priority,
                    Type = input.type,
                    Origin = input.origin
                );

                // Insert the Case
                insert newCase;

                // Set response message
                output.caseId = newCase.Id;
                output.responseMessage = 'Case created successfully';

                // If Type is 'banana', route the case to BananaSmoothy queue
                if (input.type.equalsIgnoreCase('banana')) {
                    CaseQueueItem queueItem = new CaseQueueItem(
                        QueueId = bananaQueueId,
                        CaseId = newCase.Id
                    );
                    insert queueItem;

                    output.responseMessage += ' and routed to BananaSmoothy queue';
                }
            } catch (Exception e) {
                // Handle any exceptions and set error response message
                output.responseMessage = 'Error creating Case: ' + e.getMessage();
            }
            // Add output to the list
            outputs.add(output);
        }
        // Return the list of output records
        return outputs;
    }
}
