function calculate(){
    call_sum = 0;
    sms_sum = 0;
    call = parseInt(document.getElementById('calls').value);
    sms = parseInt(document.getElementById('sms').value);
    if(call<=50 & sms <=50){
        call_sum = call *50;
        sms_sum = 0;
    } 
    else if(call<=150 & sms<=200){
        call_sum = (50*50) + (call-50)*70;
        sms_sum = (sms-50)*25;
    }
    else if(call<=300 & sms<=400){
        call_sum = (50*50) + (70*100) + (call-150)*85;
        sms_sum = (150*25) + (sms-200)*40;
    }
    else if(call>300 & sms>400){
        call_sum = (50*50) + (70*100) + (85*150) + (call-300)*95;
        sms_sum = (150*25) + (200*40) + (sms-400)*45;
    }

    sms_sum/=100;
    call_sum/=100;
    calculated_total = call_sum + sms_sum;

    alert("Charges for calls : "+call_sum+"/-\nCharges for SMS : "+sms_sum+"/-\nTotal Charges : "+calculated_total);
}