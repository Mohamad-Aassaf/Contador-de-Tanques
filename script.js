const listaDeTanks = [
    {
        nome: 'HT Peltast',
        iconPath: 'assets/peltast.png',
        preco: 23
    },
    {
        nome: 'HT Javelin',
        iconPath: 'assets/halftrack.png',
        preco: 55
    },
    {
        nome: 'AC Xiphos',
        iconPath: 'assets/xiphos.png',
        preco: 25
    },
    {
        nome: 'AC Percutio',
        iconPath: 'assets/percutio.png',
        preco: 27
    },
    {
        nome: 'AC Gemini',
        iconPath: 'assets/gemini.png',
        preco: 27
    },
    {
        nome: 'Tankette Actaeon',
        iconPath: 'assets/actaeon.png',
        preco: 35
    },
    {
        nome: 'Tankette Vesta',
        iconPath: 'assets/vesta.png',
        preco: 40
    },
    {
        nome: 'Tankette Ixion',
        iconPath: 'assets/ixion.png',
        preco: 36
    },
    {
        nome: 'Tankette Deioneus',
        iconPath: 'assets/deioneus.png',
        preco: 40
    },
    {
        nome: 'LT Hatchet',
        iconPath: 'assets/hatchet.png',
        preco: 115
    },
    {
        nome: 'LT Kranesca',
        iconPath: 'assets/kranesca.png',
        preco: 120
    },
    {
        nome: 'LT Vulcan',
        iconPath: 'assets/vulcan.png',
        preco: 135
    },
    {
        nome: 'LTD',
        iconPath: 'assets/pelekys.png',
        preco: 125
    },
    {
        nome: 'MPT',
        iconPath: 'assets/falchion.png',
        preco: 54 
    },
    {
        nome: 'Spatha',
        iconPath: 'assets/spatha.png',
        preco: 75
    },
    {
        nome: 'Bardiche',
        iconPath: 'assets/bardiche.png',
        preco: 165
    },
    {
        nome: 'Ranseur',
        iconPath: 'assets/ranseur.png',
        preco: 180
    },
    {
        nome: 'Scorpion',
        iconPath: 'assets/scorpion.png',
        preco: 160
    },
    {
        nome: 'Ballista',
        iconPath: 'assets/ballista.png',
        preco: 155
    },
    {
        nome: 'Talos',
        iconPath: 'assets/talos.png',
        preco: 60
    },
    {
        nome: 'SPG',
        iconPath: 'assets/spg.png',
        preco: 1000
    },
    {
        nome: 'BT',
        iconPath: 'assets/bt.png',
        preco: 900
    },
    {
        nome: 'BTD',
        iconPath: 'assets/btd.png',
        preco: 1000
    },
    {
        nome: 'SHT',
        iconPath: 'assets/super.png',
        preco: 2000
    },
    {
        nome: 'FMG',
        iconPath: 'assets/sagittarii.png',
        preco: 20
    },
    {
        nome: 'FAT 20mm',
        iconPath: 'assets/fat20mmC.png',
        preco: 25
    },
    {
        nome: 'FAT Ram',
        iconPath: 'assets/battering.png',
        preco: 20
    },
    {
        nome: 'FAT Smelter',
        iconPath: 'assets/smelter.png',
        preco: 30
    },
    {
        nome: 'FAT Stygian',
        iconPath: 'assets/stygian.png',
        preco: 70
    }
];
const listaDropdown = [
    {
        id: 1,
        nome: 'O\'Brien V.110',
        custo: 25
    },
    {
        id: 2,
        nome: 'O\'Brien Gravekeeper',
        custo: 30
    },
    {
        id: 3,
        nome: 'O\'Brien Highlander',
        custo: 26
    },
    {
        id: 4,
        nome: 'O\'Brien Wild Jack',
        custo: 30
    },
    {
        id: 5,
        nome: 'O\'Brien Knave',
        custo: 40
    },
    {
        id: 6,
        nome: 'O\'Brien Freeman',
        custo: 40
    },
    {
        id: 7,
        nome: 'King Gallant',
        custo: 72
    },
    {
        id: 8,
        nome: 'Devitt',
        custo: 120
    },
    {
        id: 9,
        nome: 'Devitt Ironhide',
        custo: 130
    },
    {
        id: 10,
        nome: 'Gallagher Outlaw',
        custo: 150
    },
    {
        id: 11,
        nome: 'Gallagher Highwayman',
        custo: 155
    },
    {
        id: 12,
        nome: 'Gallagher Thornfall',
        custo: 165
    },
    {
        id: 13,
        nome: 'Silverhand',
        custo: 155
    },
    {
        id: 14,
        nome: 'Silverhand Chieftain',
        custo: 160
    },
    {
        id: 15,
        nome: 'Silverhand Lordscar',
        custo: 370
    },
    {
        id: 16,
        nome: 'Noble Widow',
        custo: 160
    },
    {
        id: 17,
        nome: 'Flood',
        custo: 900
    },
    {
        id: 18,
        nome: 'Juggernaut',
        custo: 1000
    },
    {
        id: 19,
        nome: 'Predator',
        custo: 2000
    },
];

const counts = new Array(listaDeTanks.length).fill(0);
let listaDeTanquesAbatidos = [];
let total = 0;
const notificationImagesContainer = document.querySelector('#notificationImagesContainer');

function incrementCount(index) {
    counts[index]++;
    document.querySelector(`#counter-${index}`).textContent = counts[index];
    updateTotal();
    checkNotification();
    listaDeTanquesAbatidos.push(listaDeTanks[index])
}

function updateTotal() {
    total = counts.reduce((acc, val) => acc + val, 0);
    document.querySelector('#total-count').textContent = total;
}

function checkNotification() {
    const notificationContainer = document.querySelector('.notification-images');
    if (total % 5 === 0 && total !== 0) {
        showNotification();
    }

    if (notificationContainer.childElementCount > 5) {
        notificationContainer.style.flexDirection = 'column';
        notificationContainer.style.maxHeight = 'none';
    }
}

function showNotification() {
    const newNotificationImage = document.createElement('img');
    newNotificationImage.src = 'ace.png';
    newNotificationImage.className = 'notification-image';
    notificationImagesContainer.appendChild(newNotificationImage);
}

function generateResult() {
    let mensagem = "";
    let totalAces = Math.floor(total / 5);

    listaDeTanks.forEach((item, index) => {
        if (counts[index] > 0) {
            mensagem += `${counts[index]} ${item.nome} + `;
        }
    });

    const otherText = document.querySelector('#otherText').value.trim();
    if (otherText !== ""){
        mensagem += otherText + " ";
    }
    const dropdown = document.querySelector('#dropdownLegal').value;
    if (dropdown !== "Nenhum") {
        mensagem += ` COM/ ${dropdown}`;
    }
    mensagem += ` (${totalAces} Ace${totalAces !== 1 ? 's' : ''})`;
    document.querySelector('.caixa').innerHTML = mensagem;

    const valorDropdown = parseInt(document.querySelector('#dropdownLegal').value);
    const soma = somaCusto();

    if (soma >= valorDropdown) {
        const vezes = Math.floor(soma / valorDropdown)
        alert(`SE PAGOU ${vezes}x!`)
    } else if (soma < valorDropdown) {
        alert('ME PARECE UM PROBLEMA DE HABILIDADE!')
    }
}


function resetCounts() {
    counts.fill(0);
    document.querySelectorAll('.counter').forEach(counter => {
        counter.textContent = 0;
    });
    updateTotal();

    listaDeTanquesAbatidos = []
    document.querySelector('.caixa').textContent = "";
    notificationImagesContainer.innerHTML = '';
}

function copyResult() {
    const resultText = document.querySelector('.caixa').textContent;
    const textarea = document.createElement('textarea');
    textarea.value = resultText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Resultado copiado para a área de transferência!');
}

function somaCusto(){
    const soma = listaDeTanquesAbatidos.reduce((valorA, valorB) => {
        return valorA + valorB.preco
    }, 0)
    return soma
}

document.querySelector('#resetButton').addEventListener('click', resetCounts);
  
listaDeTanks.forEach((item, index) => {
    const alvo = document.querySelector('.grid')
    alvo.innerHTML +=
        `<div class="square">
        <img src="${item.iconPath}" alt="Imagem ${index}"/>
        <div class="counter" id="counter-${index}">0</div>
    </div>`
})

document.querySelectorAll('.square').forEach((square, index) => {
    square.addEventListener('click', () => incrementCount(index));
});

listaDropdown.forEach((item, index) => {
    const alvo = document.querySelector('#dropdownLegal')
    alvo.innerHTML +=
        `<option value="${item.custo}" >${item.nome}</option>`
})