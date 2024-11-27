public with sharing class dm_getContacts {
    @auraEnabled(cacheable=true)
    public static List<Contact> getContactList() {
        return [SELECT Id, FirstName, LastName, Phone, Email FROM Contact LIMIT 30];
    }

    
}