<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>:: Anxiety EX :: Quiz Time! ::</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
</head>
<?php

$con = mysqli_connect("localhost","vorinia","MySQL#1137053","anxietyex");

// Check connection

if (mysqli_connect_errno())

  {

  echo "Failed to connect to MySQL: " . mysqli_connect_error();

        }

        else echo "Successfully connected, happy coding!"

?>

<?php phpinfo() ?>
<body>
<table width="800" border="1" cellpadding="1" id="tbUserLogin">
  <tr>
    <td width="350"><div align="center">Existing Users </div></td>
    <td width="100">&nbsp;</td>
    <td><div align="center">New Users </div></td>
  </tr>
  <tr>
    <td width="350"><form name="form1" id="form1" method="post" action="">
      <p align="center">Username: 
          <input name="tfLoginUser" type="text" id="tfLoginUser" maxlength="50" />
          <br />
          Password: 
          <input name="tfLoginPass" type="password" id="tfLoginPass" maxlength="30" />
          <br />
          <input type="submit" name="Submit" value="Submit" />
        </p>
    </form>    </td>
    <td width="100">&nbsp;</td>
    <td><form name="form2" id="form2" method="post" action="">
      <div align="center">Username: 
          <input name="tfNewUser" type="text" id="tfNewUser" maxlength="50" />
          <br />
        Password: 
        <input name="tfNewPass" type="password" id="tfNewPass" maxlength="30" />
        <br />
        <input type="submit" name="Submit2" value="Submit" />
      </div>
    </form></td>
  </tr>
  <tr>
    <td width="350">&nbsp;</td>
    <td width="100">&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
</table>
</body>
</html>
