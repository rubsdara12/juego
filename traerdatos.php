<?php

include("conexion.php");
//$conexion = new Conexion();
//$conexion->conectar();


$query = "SELECT nombre, sum(resultado) as Puntaje FROM marcador GROUP BY nombre";
$conexion-> query($query) or die ("Error al Insertar"); 

?>