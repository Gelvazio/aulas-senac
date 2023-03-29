<?php


$link_api = 'https://vfr-v3-production.sizebay.technology/api/me/user/profile?sid=0A8C4B973787e8b07bc72aaf4c1abf1bacedb5d8ebf7';

$link_calca = "https://www.meujeans.com/calca-wide-leg-reta-em-jeans-escuro-jeans-escuro";

$dados = '{"id":6067988399247935608,"userId":"0A8C4B973787e8b07bc72aaf4c1abf1bacedb5d8ebf7","name":"szb-profile-no-name","gender":"F","age":21,"weight":70,"height":170.0,"bodyShapeChest":2,"bodyShapeWaist":0,"bodyShapeHip":0,"footShape":2,"skinType":0,"ignoreGender":false,"isActive":1,"lastActiveTime":1653342718742,"measures":{"chest":100.0,"waist":80.0,"hip":103.0,"sleeve":64.0,"length":59.0,"insideLeg":79.0,"neck":0.0,"fist":16.0,"underBust":88.0,"poundWeight":null,"thigh":0.0,"biceps":0.0,"headCircumference":0.0,"palm":0.0,"wrist":0.0,"insoleLength":0.0},"product":null,"idView":"6067988399247935608","is3dFeel":true,"isMetric":false}';

echo json_decode($dados);