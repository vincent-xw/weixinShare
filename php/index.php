<?php
/**
 * Created by PhpStorm.
 * User: xuewen
 * Date: 2016/12/15
 * Time: 上午11:41
 */
class Index{
        private $name;
        private $url;

    public function __construct()
    {
    }

    public function info()
    {
        $this->name = "jiaxuewen";
        $this->url = "http://www.huigo8.com";

        $resp = Array();

        $resp['name'] = $this->name;
        $resp['url'] = $this->url;

        echo json_encode($resp);
    }
}
$index = new Index();
$index->info();