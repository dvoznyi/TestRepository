class basePage { 
    themeList(){
        return cy.get('nav nb-select')   
    }
    themeListOpen() {
        return this.themeList().click()
    }
    themeOption(text){
        return cy.get('.options-list').contains(text)
    }
    themeOptionChoose(text){ 
       return this.themeOption(text).click()
    }
    themeValueCheck(themeName){
        switch(themeName){
            case 'Dark':
                cy.get('nb-layout-header nav').should('have.css', 'background-color', 'rgb(34, 43, 69)');
            break
            case 'Cosmic':
                cy.get('nb-layout-header nav').should('have.css', 'background-color', 'rgb(50, 50, 89)');
                break
            case 'Corporate':
                cy.get('nb-layout-header nav').should('have.css', 'background-color', 'rgb(255, 255, 255)');
                break
        }
    }

}
export default new basePage();
