class basePage { //классы, тесты, функции, методы и т.д. в js обычно с маленькой буквы называют (и назвать класс лучше не так)
                    // поскольку тут ты описываешь список тем сайта и он находится в хедере, то это всё можно отнести к классу basePage
                  // basePage это название "страницы" элементы которой есть на всех страницах (такие как хэдер, футер, меню и т.д.)
    themeListOpen() { //не понятное название метода (ThemeOption)
        return cy.get('nav nb-select').click()
    }
    themeOptionChoose(text){ //то же самое. Лучше назвать ThemeList
       return cy.get('.options-list').contains(text).click()
    }
    themeValueCheck(themeName){
        switch(themeName){
            case 'Dark':
                cy.get('nb-layout-header nav').should('have.css', 'background-color', 'rgb(34, 43, 69)')
            case 'Cosmic':
                cy.get('nb-layout-header nav').should('have.css', 'background-color', 'rgb(50, 50, 89)')
            case 'Corporate':
                cy.get('nb-layout-header nav').should('have.css', 'background-color', 'rgb(255, 255, 255)')
        }
    }

}
export default new basePage();
