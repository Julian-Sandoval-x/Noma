<?php

function conectarDB(): mysqli
{
    $db = new mysqli('mysql.railway.internal', 'root', 'logiPruebas1.', 'noma');

    if (!$db) {
        echo "Error no se pudo conectar";
        exit;
    }
    return $db;
}
