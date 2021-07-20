class Background {
    OptionFrame() {
        return cy.get('nav nb-select').click()
    }
    BackgroundChange(text){
       return cy.get('.options-list').contains(text).click()
    }


}
export default new Background();