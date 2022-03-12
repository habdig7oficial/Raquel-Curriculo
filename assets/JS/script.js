/*Copyright © 2021 Mateus Felipe da Silveira Vieira, Raquel Orestes da Silveira */

/*Este arquivo é parte do programa Perfectum Curriculum Vitae

Perfectum Curriculum Vitae é um software livre; você pode redistribuí-lo e/ou
modificá-lo dentro dos termos da Licença Pública Geral GNU como
publicada pela Free Software Foundation (FSF); na versão 3 da
Licença, ou (a seu critério) qualquer versão posterior.

Este programa é distribuído na esperança de que possa ser útil,
mas SEM NENHUMA GARANTIA; sem uma garantia implícita de ADEQUAÇÃO
a qualquer MERCADO ou APLICAÇÃO EM PARTICULAR. Veja a
Licença Pública Geral GNU para maiores detalhes.

Você deve ter recebido uma cópia da Licença Pública Geral GNU junto
com este programa, Se não, veja <http://www.gnu.org/licenses/>. */

document.addEventListener("DOMContentLoaded", function () {


    //geolocation services

    let endereco = document.querySelector("#endereco") 
    let cep = document.querySelector("#cep")

    let at,bairro,where,cidade;

    if ("geolocation" in navigator) {

        navigator.geolocation.getCurrentPosition(function(position) {
            let SP_dist = distance(position.coords.latitude, position.coords.longitude,-23.5768524,-46.6260026,"K");
            let Jun_dist= distance(position.coords.latitude, position.coords.longitude,-23.1658351,-46.8971499,"K");
            console.log(`dist SP: ${SP_dist}, dist JN: ${Jun_dist} `)
            
            
            if (SP_dist <= Jun_dist) {
                endereco.innerHTML = "Rua Basílio da Cunha, 401 Apto 02"
                endereco.href = "https://www.openstreetmap.org/search?query=Rua%20Bas%C3%ADlio%20da%20Cunha%20401#map=18/-23.57787/-46.62085"

                at = "01544-000";
                bairro = "Cambuci";
                where = "Capital";
                cidade = "São Paulo";
                

            }

            else if (Jun_dist < SP_dist) {
                endereco.innerHTML = "Rua Goar Lorencini, 61 "
                endereco.href = "https://www.openstreetmap.org/search?query=Goar%20Lorencini%2061#map=19/-23.16569/-46.89714"

                at =  "13215-604"
                bairro = "Vila Galvão";
                where = "São Paulo";
                cidade = "Jundiaí";

            }

            else{
                console.error("ocorreu um erro ao costumizar informações baseadas na geo localização")
            }

            cep.innerHTML = `CEP: ${at} - ${bairro} - ${cidade} / ${where}`

          })

      } else {
        console.error("Seu navegador não suporta Geolocation exbindo dados padrão");
      }


    //animation services 


    let num = document.querySelectorAll(".num")







})



