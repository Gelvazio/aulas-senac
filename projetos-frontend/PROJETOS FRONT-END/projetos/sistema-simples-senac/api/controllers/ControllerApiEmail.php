<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;

/**
 * Chamada da api Emails
 */
require_once("ControllerApiBase.php");
class ControllerApiEmail extends ControllerApiBase {
    
    public function testemail(Request $request, Response $response, array $args) {
        
        $responseEmail = $this->sendEmail("gelvazio@gmail.com", "gelvazio@t2.dev.br");
        
        return $response->withJson($responseEmail, 200);
    }
    
    private function sendEmail($from, $to) {
   
        $email = new \SendGrid\Mail\Mail();
        
        $email->setFrom($from, "Example User - Gelvazio");
        $email->setSubject("Sending with SendGrid is Fun - Gelvazio");
        $email->addTo($to, "Example User");
        $email->addContent("text/plain", "and easy to do anywhere, even with PHP");
        $email->addContent(
            "text/html", "<strong>and easy to do anywhere, even with PHP - Gelvazio</strong>"
        );
    
        $SENDGRID_API_KEY = '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';
        
        // $sendgrid = new \SendGrid(getenv('SENDGRID_API_KEY'));
        $sendgrid = new \SendGrid($SENDGRID_API_KEY);
        
        try {
            $response = $sendgrid->send($email);
            
            $aDadosRetorno = array(
                "statusCode" => $response->statusCode(),
                "headers" => $response->headers(),
                "body" => $response->body()
            );
            
            return $aDadosRetorno;
            
        } catch (Exception $e) {
            return array('status' => false, 'message' => 'Caught exception: '. $e->getMessage());
        }
    }
}
