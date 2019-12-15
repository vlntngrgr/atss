<?php
	if(isset($_POST['captcha']) && !empty($_POST['captcha'])){
		$secret = '6LdJfWkUAAAAAJnkAYVBSMj0eoljOd4-BaodcNGz';
		$ip = $_SERVER['REMOTE_ADDR'];
		$response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$secret."&response=".$_POST['captcha']."&remoteip=".$ip);
		
		$responseData= json_decode($response,true);
		
		if($responseData["success"]){
			$failed = array();
			
			if(!empty(trim($_POST['lastName']))){
				$lastName = $_POST['lastName'];
			} else {
				array_push($failed, 'lastName');
			}	
			
			if(!empty(trim($_POST['firstName']))){
				$firstName = $_POST['firstName'];
			}	else {
				array_push($failed, 'firstName');
			}
			
			if(!empty(trim($_POST['email']))){
				$email = $_POST['email'];
			}	else {
				array_push($failed, 'email');
			}
			
			if(!empty(trim($_POST['phoneNumber']))){
				$phoneNumber = $_POST['phoneNumber'];
			}	else {
				array_push($failed, 'phoneNumber');
			}
			
			if(!empty(trim($_POST['adress']))){
				$adress = $_POST['adress'];
			}	else {
				array_push($failed, 'adress');
			}
			
			if(!empty(trim($_POST['subject']))){
				$subject = $_POST['subject'];
			}	else {
				array_push($failed, 'subject');
			}
			
			if(!empty(trim($_POST['message']))){
				$message = $_POST['message'];
			}	else {
				array_push($failed, 'message');
			}
			
			if(count($failed) > 0){
				echo 'Veuillez remplir les champs' + $failed;
			} else {
				$to = 'ats.serrurier@gmail.com';
				$htmlContent = "
					<h1>Contact request details</h1>
					<p><b>Nom: </b>".$lastName." ".$firstName."</p>
					<p><b>Adresse: </b>".$adress."</p>
					<p><b>Email: </b>".$email."</p>
					<p><b>Numéro de tel: </b>".$phoneNumber."</p>
					<p><b>Message: </b>".$message."</p>
				";
				// Always set content-type when sending HTML email
				$headers = "MIME-Version: 1.0" . "\r\n";
				$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
				// More headers
				$headers .= 'From:'.$lastName.' '.$firstName.' <'.$email.'>' . "\r\n";
				//send email
				@mail($to,$subject,$htmlContent,$headers);
				
				echo 'Votre message a bien été envoyé. Nous vous recontacteront dès que possible. Redirection vers l\'accueil';
			}
			
		} else {
			echo $responseData["error-codes"][0];
		}
	} else {
		echo 'captcha non valie';
	}
?>