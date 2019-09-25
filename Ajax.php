<?php

class Ajax extends Controller{

    function ChangeCategoryActive(){
        $this->checkAuthentication();
        $ModelCategory = $this->model("ModelCategory");
        if(isset($_POST["idCate"])){
            $idCate = $_POST["idCate"];
            settype($idCate, "int");
            $kq = $ModelCategory->ChangeActive($idCate);
            echo json_encode( new KQ($kq) );
        }  
    }

}

class KQ{
    public $kq;
    public function __construct($k){
        $this->kq = $k;
    }
}