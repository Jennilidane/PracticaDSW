<?php
    $servidor = "localhost";
    $usuario = "root";
    $clave = "";
    $bd ="registroscontactos";

    $conexion = mysqli_connect ($servidor, $usuario, $clave, $bd);
?>

<?php
if(isset($_POST['Registro'])){
    $Nombre=$_POST['Nombre'];
    $Telefono=$_POST['Telefono'];
    $Correo=$_POST['Correo'];
    $Comentarios=$_POST['Comentarios'];

    $guardar ="INSERT INTO Contactos VALUES ('$Nombre', '$Telefono', '$Correo', '$Comentarios', '')";

    $ejecutar = mysqli_query ($conexion,$guardar);

    header('location:RegistroContactos.html');
}
?>