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

document.addEventListener('DOMContentLoaded', () => {
    listaDeTanks.forEach((item, index) => {
        const alvo = document.querySelector('.tankgrid');
        alvo.innerHTML +=
            `<div id="tank-square" class="bg-sky-500 w-full py-5 px-2 rounded-xl shadow hover:bg-sky-600 cursor-pointer relative">
                <img src="${item.iconPath}" class="w-full" alt="Imagem ${index}"/>
                <div class="absolute bottom-1 left-2 counter" id="counter-${index}">0</div>
                <button class="rounded-xl shadow absolute top-1 right-1 bg-white hover:bg-gray-200 w-5 h-5 flex justify-center items-center" onclick="decrementCount(${index})">
                    <div class="w-3 h-1 bg-black"></div>
                </button>
            </div>`;
    });

    document.querySelectorAll('#tank-square').forEach((square, index) => {
        square.addEventListener('click', () => incrementCount(index));
    });

    listaDropdown.forEach((item) => {
        const alvo = document.querySelector('#dropdownLegal');
        alvo.innerHTML +=
            `<option value="${item.custo}">${item.nome}</option>`;
    });

    const languageSwitch = document.getElementById('languageSwitch');
    languageSwitch.addEventListener('change', toggleLanguage);

    toggleLanguage();
});

function toggleLanguage() {
    const isEnglish = document.getElementById('languageSwitch').checked;
    const elementsToTranslate = [
        { id: 'dropdown-label', pt: 'Estou usando um:', en: 'I am using a:' },
        { id: 'total-label', pt: 'Total de Kill:', en: 'Total Kills:' },
        { id: 'generate-button', pt: 'Gerar resultado', en: 'Generate result' },
        { id: 'copy-button', pt: 'Copiar', en: 'Copy' },
        { id: 'resetButton', pt: 'Resetar', en: 'Reset' },
        { id: 'reset-warning', pt: 'O botão "resetar" irá dar reset em TUDO.<br>Salve bem as informações antes de resetar!', en: 'The "reset" button will reset EVERYTHING.<br>Save your information before resetting!' },
        { id: 'other-label', pt: 'Outros:', en: 'Others:' },
        { id: 'aces-label', pt: 'Ace\'s:', en: 'Aces:' },
        { id: 'info-label', pt: 'Informações:', en: 'Information:' },
        { id: 'info-text', pt: 'Bugs, dúvidas ou sugestões, chame no Discord abaixo:<br><span>@mohamadassafbr</span><br>Gostou do trabalho? Dá uma ajudinha ai!<br><span>PIX QR CODE:</span>', en: 'Bugs, questions, or suggestions, call on Discord below:<br><span>@mohamadassafbr</span><br>Liked the work? Help us out!<br><span>PIX QR CODE:</span>' },
        { id: 'help-text', pt: 'Para ajudar no trabalho!', en: 'To help with the work!' }
    ];

    elementsToTranslate.forEach(element => {
        document.getElementById(element.id).innerHTML = isEnglish ? element.en : element.pt;
    });

    document.getElementById('language-label').textContent = isEnglish ? 'EN' : 'PT';
    document.getElementById('language-label-en').textContent = isEnglish ? 'PT' : 'EN';
}

function incrementCount(index) {
    if (counts[index] === 0) {
        document.querySelector(`#counter-${index}`).style.color = 'greenyellow';
    }
    counts[index]++;
    document.querySelector(`#counter-${index}`).textContent = counts[index];
    updateTotal();
    checkNotification();
    listaDeTanquesAbatidos.push(listaDeTanks[index]);
}

function decrementCount(index) {
    event.stopPropagation();
    if (counts[index] === 1) {
        document.querySelector(`#counter-${index}`).style.color = 'red';
    }
    if (counts[index] > 0) {
        counts[index]--;
        document.querySelector(`#counter-${index}`).textContent = counts[index];
        updateTotal();
        listaDeTanquesAbatidos = listaDeTanquesAbatidos.filter((item, i) => i !== listaDeTanquesAbatidos.findIndex(tank => tank.nome === listaDeTanks[index].nome));
        checkNotification();
    }
}

function updateTotal() {
    total = counts.reduce((acc, val) => acc + val, 0);
    document.querySelector('#total-count').textContent = total;
}
function checkNotification() {
    const aceCount = Math.floor(total / 5);
    const currentAceImages = notificationImagesContainer.childElementCount;

    if (total % 5 === 0 && total !== 0 && aceCount > currentAceImages) {
        showNotification();
    } else if (aceCount < currentAceImages) {
        removeNotificationImage();
    }

    if (notificationImagesContainer.childElementCount > 5) {
        notificationImagesContainer.classList.add('ace-grid');
    } else {
        notificationImagesContainer.classList.remove('ace-grid');
    }
}

function showNotification() {
    const newNotificationImage = document.createElement('img');
    newNotificationImage.src = 'ace.png';
    newNotificationImage.className = 'notification-image';
    notificationImagesContainer.appendChild(newNotificationImage);
}

function removeNotificationImage() {
    const lastNotificationImage = notificationImagesContainer.querySelector('.notification-image:last-child');
    if (lastNotificationImage) {
        notificationImagesContainer.removeChild(lastNotificationImage);
    }
}

function hideNotification() {
    const notificationContainer = document.querySelector('.notification-images');
    const notificationImages = document.querySelectorAll('.notification-image');
    notificationImages.forEach(image => {
        notificationContainer.removeChild(image);
    });
}

function generateResult() {
    console.log('teste');
    let mensagem = "";
    let totalAces = Math.floor(total / 5);

    listaDeTanks.forEach((item, index) => {
        if (counts[index] > 0) {
            mensagem += `${counts[index]} ${item.nome} + `;
        }
    });

    const otherText = document.querySelector('#otherText').value.trim();
    if (otherText !== "") {
        mensagem += otherText + " ";
    }

    const dropdownIndex = document.querySelector('#dropdownLegal').selectedIndex;
    const dropdownNome = listaDropdown[dropdownIndex].nome;

    if (dropdownNome !== "Nenhum") {
        mensagem += ` C/ ${dropdownNome}`;
    }

    mensagem += ` (${totalAces} Ace${totalAces !== 1 ? 's' : ''})`;
    document.querySelector('.caixa').innerHTML = mensagem;

    const valorDropdown = parseInt(document.querySelector('#dropdownLegal').value);
    const soma = somaCusto();
    const messageElement = document.getElementById('mensagemdaorinha');

    if (soma >= valorDropdown) {
        const vezes = Math.floor(soma / valorDropdown);
        messageElement.textContent = `SE PAGOU ${vezes}x!`
    } else if (soma < valorDropdown) {
        messageElement.textContent = 'ME PARECE SER UM PROBLEMA DE HABILIDADE!'
    }
}

/* RESETAR AS CONTAGENS */
function resetCounts() {
    counts.fill(0);
    document.querySelectorAll('.counter').forEach(counter => {
        counter.textContent = 0;
        counter.style.color = 'red';
    });
    updateTotal();
    listaDeTanquesAbatidos = [];
    document.querySelector('.caixa').textContent = "";
    hideNotification();
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

function somaCusto() {
    return listaDeTanquesAbatidos.reduce((valorA, valorB) => valorA + valorB.preco, 0);
}

document.querySelector('#resetButton').addEventListener('click', resetCounts);

listaDeTanks.forEach((item, index) => {
    const alvo = document.querySelector('.tankgrid');
    alvo.innerHTML +=
        `<div id="tank-square" class="bg-sky-500 w-full py-5 px-2 rounded-xl shadow hover:bg-sky-600 cursor-pointer relative">
            <img src="${item.iconPath}" class="w-full" alt="Imagem ${index}"/>
            <div class="absolute bottom-1 left-2" id="counter-${index}">0</div>
            <button class="rounded-xl shadow absolute top-1 right-1 bg-white hover:bg-gray-200 w-5 h-5 flex justify-center items-center" onclick="decrementCount(${index})">
                <div class="w-3 h-1 bg-black"></div>
            </button>
        </div>`;
});

document.querySelectorAll('#tank-square').forEach((square, index) => {
    square.addEventListener('click', () => incrementCount(index));
});

listaDropdown.forEach((item, index) => {
    const alvo = document.querySelector('#dropdownLegal');
    alvo.innerHTML +=
        `<option value="${item.custo}">${item.nome}</option>`;
});