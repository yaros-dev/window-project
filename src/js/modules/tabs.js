const tabs = (parentSelector, tabsSelector, contentSelector, activeClass) => {
    const header = document.querySelector(parentSelector),
        tab = document.querySelectorAll(tabsSelector),
        content = document.querySelectorAll(contentSelector);

    function hideTabContent() {

        content.forEach(item => {
            item.style.display = 'none';
        });

        tab.forEach(item => {
            item.classList.remove(activeClass)
        });

    }

    function showTabContent(i = 0) {
        content[i].style.display = 'block';
        tab[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    header.addEventListener("click", (e) => { 
        const target = e.target;
        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((element, i) => {
                if (target == element) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

};







export default tabs;