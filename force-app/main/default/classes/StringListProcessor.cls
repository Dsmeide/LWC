public class StringListProcessor {

    @InvocableMethod(label='Process String List' description='Process a string list separated by a specified delimiter')
    public static List<ProcessStringListOutput> processStringList(
        List<StringListInputWrapper> inputList
    ) {
        List<ProcessStringListOutput> outputList = new List<ProcessStringListOutput>();

        if (inputList != null && !inputList.isEmpty()) {
            // Access the stringList from the first element in the list
            String inputStringList = inputList[0].inputStringList;

            if (!String.isBlank(inputStringList)) {
                // Check if the string contains semicolons
                if (inputStringList.contains(';')) {
                    // Create a collection variable to store the strings
                    List<String> stringCollection = new List<String>(inputStringList.split(';'));
                    
                    // Output the collection variable
                    ProcessStringListOutput output = new ProcessStringListOutput();
                    output.stringCollection = stringCollection;
                    outputList.add(output);
                }
                // Check if the string contains commas
                else if (inputStringList.contains(',')) {
                    // Create a collection variable to store the strings
                    List<String> stringCollection = new List<String>(inputStringList.split(','));
                    
                    // Output the collection variable
                    ProcessStringListOutput output = new ProcessStringListOutput();
                    output.stringCollection = stringCollection;
                    outputList.add(output);
                }
            }
        }

        return outputList;
    }

    // Inner class to represent the input structure
    public class StringListInputWrapper {
        @InvocableVariable(label='Input String List' description='String list separated by a specified delimiter')
        public String inputStringList;
    }

    // Inner class to represent the output structure
    public class ProcessStringListOutput {
        @InvocableVariable(label='String Collection' description='Collection of strings')
        public List<String> stringCollection;
    }
}
