public with sharing class dm_lwcAccController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        return[SELECT Id,Name,Phone,Industry FROM Account ORDER BY CreatedDate LIMIT 50];
    } 
}