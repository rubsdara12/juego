<?php
include("conexion.php");

$resultadoConsulta = '';
$msg = 'El marcador es: ';
$result = $conexion->query("SELECT nombre, sum(resultado) as Puntaje FROM marcador GROUP BY nombre")or die ("Error al Consultar");
if ($result) {
    while ($fila = $fila=$result->fetch_array()){
        // $resultadoConsulta .= ','.$fila['nombre'];
        // $resultadoConsulta .= ','.$fila['Puntaje'];
        $nombre =$fila['nombre'];
        $puntaje=$fila['Puntaje'];
        echo "$nombre: $puntaje <hr>";
        }
    }
else{
    $msg= 'No hay datos';
}


// Devolvemmos la cadena de respuesta
// echo $msg.$resultadoConsulta;
// echo $msg;

// $query = "SELECT nombre, sum(resultado) as Puntaje FROM marcador GROUP BY nombre";
// $conexion-> query($query) or die ("Error al Consultar"); 

?>