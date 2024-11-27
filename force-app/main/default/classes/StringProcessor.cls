public class StringProcessor {

    @InvocableMethod(label='Process String List' description='Process a string list with a specified delimiter')
    public static List<StringOutput> processStringList(List<StringInput> inputList) {
        List<StringOutput> outputList = new List<StringOutput>();

        if (inputList != null && !inputList.isEmpty()) {
            // Access the stringList from the first element in the list
            String inputString = inputList[0].inputString;

            if (!String.isBlank(inputString)) {
                // Check if the string contains semicolons
                if (inputString.contains(';')) {
                    // Create a collection variable to store the strings
                    List<String> stringList = new List<String>(inputString.split(';'));
                    
                    // Output the collection variable
                    StringOutput output = new StringOutput();
                    output.stringList = stringList;
                    outputList.add(output);
                }
                // Check if the string contains commas
                else if (inputString.contains(',')) {
                    // Create a collection variable to store the strings
                    List<String> stringList = new List<String>(inputString.split(','));
                    
                    // Output the collection variable
                    StringOutput output = new StringOutput();
                    output.stringList = stringList;
                    outputList.add(output);
                }
            }
        }

        return outputList;
    }

    // Inner class to represent the input structure
    public class StringInput {
        @InvocableVariable(label='Input String List' description='String list with a specified delimiter')
        public String inputString;
    }

    // Inner class to represent the output structure
    public class StringOutput {
        @InvocableVariable(label='String List' description='List of strings')
        public List<String> stringList;
    }
}
