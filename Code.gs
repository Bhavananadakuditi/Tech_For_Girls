function doPost(e) {
    var sheet = SpreadsheetApp.openById('1Q_m0FpAMP0mKMnE5q0xeoC_kBGyKO9b_icG0oDFzLSk').getActiveSheet();
    var name = e.parameters.name;
    var phone = e.parameters.phone;
    var email = e.parameters.email;
    var college = e.parameters.college;
    var screenshot = e.parameters.screenshot;

    // Save data to the sheet
    sheet.appendRow([name, phone, email, college, screenshot]);

    return ContentService.createTextOutput(JSON.stringify({ result: "Success" })).setMimeType(ContentService.MimeType.JSON);
}
