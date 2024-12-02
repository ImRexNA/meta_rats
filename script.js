document.addEventListener('DOMContentLoaded', () => {
    const classOptions = document.querySelectorAll('.classContainer');
    const classTableBody = document.querySelector('#classTable tbody');
    const portraitImage = document.querySelector('.overlay-image.portrait');
    const perkMenu = document.createElement('div');
    const skillMenu = document.createElement('div'); // Create skill menu
    perkMenu.classList.add('perk-menu', 'hidden');
    skillMenu.classList.add('skill-menu', 'hidden'); // Add class for skill menu
    document.body.appendChild(perkMenu);
    document.body.appendChild(skillMenu); // Append skill menu to body
    const perkSlots = document.querySelectorAll('.overlay-image[data-perk-slot]');
    const skillSlots = document.querySelectorAll('.overlay-image[data-skill-slot]'); // Skill slots
    let activePerkSlot = null;
    let activeSkillSlot = null; // For active skill slot
    let selectedClass = 'barbarian'; // Default selected class

    // Set to store selected perks and skills
    const selectedPerks = new Set();
    const selectedSkills = new Set(); // Track selected skills

    // Function to clear selected perks and skills
    function clearSelected() {
        selectedPerks.clear(); // Clear the set of selected perks
        selectedSkills.clear(); // Clear the set of selected skills
        perkSlots.forEach(slot => {
            slot.src = 'img/inventory/blank.png'; // Reset each perk slot to default
        });
        skillSlots.forEach(slot => {
            slot.src = 'img/inventory/blank.png'; // Reset each skill slot to default
        });
        selectedItems.clear();
        itemSlots.forEach(slot => {
            slot.src = 'img/inventory/blank.png';
        });
    }

    // Function to update the table and portrait when a class is selected
    function updateTableAndPortrait(selectedClass) {
        classTableBody.innerHTML = '';
        const data = classData[selectedClass] || { stats: [], portrait: '' };

        data.stats.forEach(row => {
            const tr = document.createElement('tr');
            const tdStat = document.createElement('td');
            const tdValue = document.createElement('td');

            tdStat.textContent = row.stat;
            tdValue.textContent = row.value;

            tr.appendChild(tdStat);
            tr.appendChild(tdValue);
            classTableBody.appendChild(tr);

            const img = document.createElement('img');
            img.src = 'img/Inventory_Stat_DLine.webp';
            img.alt = 'Separator';
            img.style.width = '100%';
            classTableBody.appendChild(img);
        });

        portraitImage.src = data.portrait;
    }

    // Function to update the visibility of perk options
    function updatePerkOptions() {
        const perkOptions = document.querySelectorAll('.perk-option');
        perkOptions.forEach(option => {
            const perkClass = option.getAttribute('data-class');
            if (selectedPerks.has(option.getAttribute('data-perk')) && option.getAttribute('data-perk') !== 'none') {
                option.style.display = 'none'; // Hide if already selected
            } else if (perkClass === selectedClass || perkClass === 'all') {
                option.style.display = ''; // Show valid perks
            } else {
                option.style.display = 'none'; // Hide invalid perks
            }
        });
    }
    
    // Function to update the visibility of skill options
    function updateSkillOptions() {
        const skillOptions = document.querySelectorAll('.skill-option');
        skillOptions.forEach(option => {
            const skillClass = option.getAttribute('data-class');
            if (selectedSkills.has(option.getAttribute('data-skill')) && option.getAttribute('data-skill') !== 'none') {
                option.style.display = 'none'; // Hide if already selected
            } else if (skillClass === selectedClass || skillClass === 'all') {
                option.style.display = ''; // Show valid skills
            } else {
                option.style.display = 'none'; // Hide invalid skills
            }
        });
    }
    
    // Function to generate perk options dynamically
    function generatePerkOptions() {
        perkMenu.innerHTML = ''; // Clear existing options
        perksData.forEach(perk => {
            const perkOption = document.createElement('div');
            perkOption.classList.add('perk-option');
            perkOption.setAttribute('data-perk', perk.perk);
            perkOption.setAttribute('data-class', perk.class);

            const img = document.createElement('img');
            img.src = perk.imgSrc;
            img.alt = perk.alt;

            perkOption.appendChild(img);

            if (perk.name && perk.description) {
                const perkName = document.createElement('div');
                perkName.classList.add('perkName');
                perkName.textContent = perk.name;

                const perkDescription = document.createElement('div');
                perkDescription.classList.add('perkDescription');
                perkDescription.textContent = perk.description;

                perkOption.appendChild(perkName);
                perkOption.appendChild(perkDescription);
            }

            perkMenu.appendChild(perkOption);
        });
    }

    // Function to generate skill options dynamically
    function generateSkillOptions() {
        skillMenu.innerHTML = ''; // Clear existing options
        skillsData.forEach(skill => {
            const skillOption = document.createElement('div');
            skillOption.classList.add('skill-option');
            skillOption.setAttribute('data-skill', skill.skill);
            skillOption.setAttribute('data-class', skill.class);

            const img = document.createElement('img');
            img.src = skill.imgSrc;
            img.alt = skill.alt;

            skillOption.appendChild(img);

            if (skill.name && skill.description) {
                const skillName = document.createElement('div');
                skillName.classList.add('skillName');
                skillName.textContent = skill.name;

                const skillDescription = document.createElement('div');
                skillDescription.classList.add('skillDescription');
                skillDescription.textContent = skill.description;

                skillOption.appendChild(skillName);
                skillOption.appendChild(skillDescription);
            }

            skillMenu.appendChild(skillOption);
        });
    }

    // Initialize with default class
    document.querySelector('.classContainer[data-class="barbarian"]').click();

    // Generate perks and skills dynamically
    generatePerkOptions();
    generateSkillOptions();

    // Event listeners for perk slots
    perkSlots.forEach(slot => {
        slot.addEventListener('click', () => {
            activePerkSlot = slot; // Save clicked perk slot
            perkMenu.classList.remove('hidden'); // Show perk menu
            updatePerkOptions(); // Update options visibility
        });
    });

    // Event listeners for skill slots
    skillSlots.forEach(slot => {
        slot.addEventListener('click', () => {
            activeSkillSlot = slot; // Save clicked skill slot
            skillMenu.classList.remove('hidden'); // Show skill menu
            updateSkillOptions(); // Update options visibility
        });
    });

// ===============>>>>>>>>>>>>


    const itemMenu = document.createElement('div');
    itemMenu.classList.add('item-menu', 'hidden');
    document.body.appendChild(itemMenu);
    const itemSlots = document.querySelectorAll('.overlay-image[data-item-slot]');
    let activeItemSlot = null;
    const selectedItems = new Set();

    function updateItemOptions() {
        const itemOptions = document.querySelectorAll('.item-option');
        const activeSlotId = activeItemSlot.getAttribute('data-item-slot');
    
        itemOptions.forEach(option => {
            const itemSlotCompatibility = option.getAttribute('data-slots').split(',');
    
            if (
                (option.getAttribute('data-class') === selectedClass || option.getAttribute('data-class') === 'all') &&
                (itemSlotCompatibility.includes(activeSlotId) || itemSlotCompatibility.includes('all'))
            ) {
                option.style.display = '';
            } else {
                option.style.display = 'none';
            }
            
        });
    }

    function generateItemOptions() {
        itemMenu.innerHTML = '';
        itemsData.forEach(item => {
            const itemOption = document.createElement('div');
            itemOption.classList.add('item-option');
            itemOption.setAttribute('data-item', item.item);
            itemOption.setAttribute('data-class', item.class);
            itemOption.setAttribute('data-slots', item.slots.join(',')); // Store compatible slots
    
            const img = document.createElement('img');
            img.src = item.imgSrc;
            img.alt = item.alt;
    
            itemOption.appendChild(img);
    
            if (item.name && item.description) {
                const itemName = document.createElement('div');
                itemName.classList.add('itemName');
                itemName.textContent = item.name;
    
                const itemDescription = document.createElement('div');
                itemDescription.classList.add('itemDescription');
                itemDescription.textContent = item.description;
    
                itemOption.appendChild(itemName);
                itemOption.appendChild(itemDescription);
            }
    
            itemMenu.appendChild(itemOption);
        });
    }

    generateItemOptions();

    itemSlots.forEach(slot => {
        slot.addEventListener('click', () => {
            activeItemSlot = slot;
            itemMenu.classList.remove('hidden');
            updateItemOptions(); // Update options based on active slot
        });
    });











// ===============>>>>>>>>>>>>

document.addEventListener('click', (event) => {
    // Handle perk selection
    if (event.target.closest('.perk-option')) {
        const option = event.target.closest('.perk-option');
        const selectedPerk = option.getAttribute('data-perk');

        if (activePerkSlot) {
            if (selectedPerk === 'none') {
                selectedPerks.delete(activePerkSlot.src.split('/').pop().split('.png')[0]); // Remove old perk
                activePerkSlot.src = `img/inventory/blank.png`; // Reset slot
            } else if (!selectedPerks.has(selectedPerk)) {
                selectedPerks.delete(activePerkSlot.src.split('/').pop().split('.png')[0]); // Remove old perk
                selectedPerks.add(selectedPerk);
                activePerkSlot.src = option.querySelector('img').src; // Set new perk
            }
            updatePerkOptions(); // Update perk options
        }

        perkMenu.classList.add('hidden'); // Hide perk menu
    }

    // Handle skill selection
    if (event.target.closest('.skill-option')) {
        const option = event.target.closest('.skill-option');
        const selectedSkill = option.getAttribute('data-skill');

        if (activeSkillSlot) {
            const currentSkill = activeSkillSlot.getAttribute('data-skill'); // Get the current skill in the slot

            // Remove the current skill from the selected set (if any)
            if (currentSkill && currentSkill !== 'none') {
                selectedSkills.delete(currentSkill);
            }

            if (selectedSkill === 'none') {
                activeSkillSlot.src = `img/inventory/blank.png`; // Reset to default slot image
                activeSkillSlot.setAttribute('data-skill', 'none'); // Reset the slot's data-skill attribute
            } else if (!selectedSkills.has(selectedSkill)) {
                selectedSkills.add(selectedSkill); // Add new skill to the selected set
                activeSkillSlot.src = option.querySelector('img').src; // Set the new skill image in the slot
                activeSkillSlot.setAttribute('data-skill', selectedSkill); // Store the selected skill in the slot
            }

            updateSkillOptions(); // Update skill options visibility
        }

        skillMenu.classList.add('hidden'); // Hide the skill menu
    }

    // Handle item selection (allow duplicates)
    if (event.target.closest('.item-option')) {
        const option = event.target.closest('.item-option');
        const selectedItem = option.getAttribute('data-item');

        if (activeItemSlot) {
            if (selectedItem === 'none') {
                activeItemSlot.src = `img/inventory/blank.png`; // Reset slot
            } else {
                activeItemSlot.src = option.querySelector('img').src; // Set new item
            }
            updateItemOptions(); // Update item options
        }

        itemMenu.classList.add('hidden'); // Hide item menu
    }

    // Hide menus if clicked outside
    if (!event.target.closest('.perk-menu') && !event.target.closest('.overlay-image[data-perk-slot]')) {
        perkMenu.classList.add('hidden');
    }
    if (!event.target.closest('.skill-menu') && !event.target.closest('.overlay-image[data-skill-slot]')) {
        skillMenu.classList.add('hidden');
    }
    if (!event.target.closest('.item-menu') && !event.target.closest('.overlay-image[data-item-slot]')) {
        itemMenu.classList.add('hidden');
    }
});

    // Event listeners for class selection
    classOptions.forEach(option => {
        option.addEventListener('click', () => {
            selectedClass = option.getAttribute('data-class');
            clearSelected();
            updateTableAndPortrait(selectedClass);
            updateSkillOptions();
            updatePerkOptions();
            updateItemOptions();
        });
    });   
});
