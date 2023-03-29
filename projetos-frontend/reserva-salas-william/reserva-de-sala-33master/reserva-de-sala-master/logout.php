<?php
session_start();
session_unset();
session_destroy();
echo "<script>alert('Sessao Finalizada');
		window.location.replace('index.html');
		</script>";
?>