function validar(f) { /*Funcion q valida campos del formulario de reclutamiento*/
  var ok = true;
  var msg = "Adalid debes copletar los siguientes campos: >:(\n";
  if(f.elements[0].value == "")
  {
    msg += "- Nombre\n";
    ok = false;
  }
  if(f.elements[1].value == "")
  {
    msg += "- Apellido Paterno\n";
    ok = false;
  }
  if(f.elements[2].value == "")
  {
    msg += "- Apellido Materno\n";
    ok = false;
  }
  if(f.elements[3].value == "")
  {
    msg += "- Correo Electronico\n";
    ok = false;
  }
  if(f.elements[4].checked==false && f.elements[5].checked==false)
  {
    msg += "- Sexo\n";
    ok = false;
  }

  if(ok == false)
    alert(msg);
  return ok;
}