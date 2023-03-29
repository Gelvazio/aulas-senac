var app = angular.module('app');

app.controller('CadastroController', function($scope, $location, $routeParams, $http)
{
    $scope.locais = [];
    $scope.reservaJaExiste = false;
    var idReserva = $routeParams.id;// ID enviado por quem requisitou a rota

    // Verifica se existe cadastro para editar ou cria um novo cadastro
    if(idReserva){
        // Requisição AJAX para obter a reserva ou criar uma nova
        $http.get('http://localhost:5000/reservas/' + idReserva)
            .then(function(response) {
                $scope.reserva = response.data;
                $scope.reserva.dataInicio = new Date($scope.reserva.dataInicio);
                $scope.reserva.dataFim = new Date($scope.reserva.dataFim);
            });
    } else {
        $scope.reserva = {};
    }

    // Requisição AJAX para obter a lista de locais do backend
    $http.get('http://localhost:5000/locais')
        .then(function(response) {
            $scope.locais = response.data;
        });

    $scope.salvar = function salvar(formularioEhValido) {
        // Consulta se há reservas com esse local, veículo e entre as datas e horários
        $http.post('http://localhost:5000/reservas/consulta', {
            local: $scope.reserva.local._id,
            sala: $scope.reserva.sala,
            dataInicio: $scope.reserva.dataInicio,
            dataFim: $scope.reserva.dataFim
            })
            .then(function(response) {
                $scope.reservaJaExiste = !!response.data.length;
                // Se reserva está disponível, cria/altera uma reserva
                if(!$scope.reservaJaExiste) {
                    if(!formularioEhValido) return;
                    if($scope.reserva._id) {
                        $http.put('http://localhost:5000/reservas', $scope.reserva)
                            .then(function(response) {
                            $location.path('/');
                        });
                    } else {
                        $http.post('http://localhost:5000/reservas', $scope.reserva)
                            .then(function(response) {
                            $location.path('/');
                            });
                        }
                     } else {
                        console.log("Reserva já existe");
                    }
                });
            }

    $scope.abreModalEditar = function abreModalEditar(reserva, indice) {
        $scope.reserva = reserva;
        $scope.indice = indice;
        $('#editar').modal('show');
    };

    $scope.cancelar = function cancelar() {
        $location.path("/");
    }
});