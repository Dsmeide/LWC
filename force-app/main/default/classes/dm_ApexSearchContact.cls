public with sharing class dm_ApexSearchContact {
    @AuraEnabled(cacheable=true)
    
    public static List<Contact> findContacts(string searchtext){
        string key = '%'+searchtext+'%';
        return [SELECT Id, Name, Phone, Email FROM Contact WHERE FirstName like :key];
    }
}