<?php
require_once "jssdk.php";
class Sign{
  private $appId;
  private $appSecret;

  public function __construct($appid,$appSecret){
    $this->appId = $appid;
    $this->appSecret = $appSecret;
  }

  private  function getRequset($way){
    $param = null;
    if($way == "get"){
      $param = $_GET;
    }elseif($way == "post"){
      $param = $_POST;
    }elseif($way == "file"){
      $param = $_FILES;
    }

    return $param;

  }
  public function getSing(){
    $params = $this->getRequset("get");
    $jssdk = new JSSDK($this->appId,$this->appSecret,$params["url"]);
    $signPackage = $jssdk->GetSignPackage();
    echo json_encode($signPackage);
  }
}
$sing = new Sign("your_APPID", "your_APPSecret");
$sing->getSing();
?>

