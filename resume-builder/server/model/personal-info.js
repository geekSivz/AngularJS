var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var personalInfoSchema = new Schema({
    name                  : String,  
    personal_mail_id      : String,  
    alternate_mail_id     : String,  
    persaonal_mobile_no   : String,  
    alternate_mobile_no   : String,  
    address_line_1        : String,  
    address_line_2        : String,  
    address_line_3        : String, 
    state                 : String, 
    pin_code              : String, 
    career_objective      : String, 
    profile_description   : String
}, {collection: 'personal_infos'});
personalInfo = mongoose.model('personal_info', personalInfoSchema,'personal_info');