class Background { //классы, тесты, функции, методы и т.д. в js обычно с маленькой буквы называют (и назвать класс лучше не так)
                    // поскольку тут ты описываешь список тем сайта и он находится в хедере, то это всё можно отнести к классу basePage
                  // basePage это название "страницы" элементы которой есть на всех страницах (такие как хэдер, футер, меню и т.д.)
    OptionFrame() { //не понятное название метода (ThemeOption)
        return cy.get('nav nb-select').click()
    }
    BackgroundChange(text){ //то же самое. Лучше назвать ThemeList
       return cy.get('.options-list').contains(text).click()
    }


}
export default new Background();
