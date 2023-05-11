console.log("Inside the script");
var f9_visiblefields;
var f9_hiddenfields;

if(typeof mw_customer_data === 'undefined'){
	console.log("User Logged In");
	f9_visiblefields = {"en":{"messenger":{"customText":{"inputPlaceholderBlocked":"Complete the form, then press \"Start\"..."}},"systemMessages":{"transferredToParticipant":"The chat has been transferred to {name}.","transferredToGroup":"That chat has been transferred to group {group}."},"captureFields":[{"k":"name","l":"First Name","p":"Enter your first name..."},{"k":"email","l":"Email Address","p":"Enter your email..."},{"k":"Caller.PhoneNumber","l":"Phone Number","p":"Enter your phone number..."},{"k":"zip","l":"Zip Code","p":"Enter your zip code..."},{"k":"Question","l":"Question","p":"What can we help you with today?"}]}};
	f9_hiddenfields = [{"k":"campaign","v":"Chat - Banyan Hill"},{"k":"Caller.Customer Number","v":""}];
}
else {
	console.log("User Not Logged In");
	f9_visiblefields = {"en":{"messenger":{"customText":{"inputPlaceholderBlocked":"Complete the form, then press \"Start\"..."}},"systemMessages":{"transferredToParticipant":"The chat has been transferred to {name}.","transferredToGroup":"That chat has been transferred to group {group}."},"captureFields":[{"k":"Caller.PhoneNumber","l":"Phone Number","p":"Enter your phone number..."},{"k":"Question","l":"Question","p":"What can we help you with today?"}]}};
	f9_hiddenfields = [{"k":"campaign","v":"Chat - Banyan Hill"},{"k":"name","v":mw_customer_data["agora_customer_firstname"]},{"k":"email","v":mw_customer_data["agora_customer_email"]},{"k":"zip","v":mw_customer_data["agora_customer_zip"]},{"k":"Caller.Customer Number","v":mw_customer_data["agora_customer_number"]}]

}


F9.Chat.Wrapper.init({
	cdn: 'alpha-us',
	useBusinessHours: false,
	languages: {"enabled":false},
	l10n: f9_visiblefields,    
	prepopulatedFields: f9_hiddenfields,    
	messenger: {"integrationId":"6329b66aa8113300f3063f8d","soundNotificationEnabled":true,"transcriptPrintingEnabled":true,"menuItems":{"imageUpload":true,"fileUpload":true,"shareLocation":true},"embedded":false,"businessName":"Banyan Hill Publishing","businessIconUrl":"https://cdn.banyanhill.com/wp-content/uploads/2021/05/05110622/cropped-180x180_BanyanFavicon-192x192.jpg","browserStorage":"sessionStorage","fixedHeader":false,"displayStyle":"button","customColors":{"brandColor":"ff6600","conversationColor":"ff6600","actionColor":"ff6600"}}
});
