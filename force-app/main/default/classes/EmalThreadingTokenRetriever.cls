public class EmailThreadingTokenRetriever {

    @InvocableMethod(label='Check if RecordId Exists from Email' description='Checks if a RecordId (e.g., CaseId) can be extracted from the email fields (subject, plainTextBody, htmlBody)')
    public static List<Boolean> hasRecordIdFromEmailMessage(List<Id> emailMessageIds) {
        List<Boolean> hasRecordIds = new List<Boolean>();

        // Query the necessary fields from the EmailMessage object
        List<EmailMessage> emailMessages = [SELECT Id, Subject, TextBody, HtmlBody 
                                            FROM EmailMessage 
                                            WHERE Id IN :emailMessageIds];

        // Loop through each EmailMessage record
        for (EmailMessage emailMessage : emailMessages) {
            try {
                // Use the Salesforce method to get the RecordId from the email fields
                Id recordId = EmailMessages.getRecordIdFromEmail(emailMessage.Subject, emailMessage.TextBody, emailMessage.HtmlBody);

                // If the RecordId is found, add true; else, add false
                if (recordId != null) {
                    hasRecordIds.add(true);  // RecordId found
                } else {
                    hasRecordIds.add(false); // No RecordId found
                }
            } catch (Exception e) {
                // In case of an exception, add false
                hasRecordIds.add(false);
            }
        }

        return hasRecordIds;  // Return the list of booleans
    }
}
