<?php
//echo $_POST['$nombre'];
$extract = ($_POST);
include("conexion.php");
//$conexion = new Conexion();
//$conexion->conectar();
$nombre = $_POST["nombre"];
$resultado = $_POST["resultado"];


$query = "INSERT INTO marcador(nombre, resultado) values('$nombre', '$resultado')";
$conexion-> query($query) or die ("Error al Insertar"); 

?>