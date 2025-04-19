describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click(); //Нажал Войти
          
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#messageHeader').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик
     
     })
     it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

       
        cy.get('#forgotEmailButton').click(); //Нажимаю Воссатановить пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); //Ввел почту для восстановления
        cy.get('#restoreEmailButton').click(); //Нажал отправить код

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик
    
    })

     it('Верный логин и Неверный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio7');
        cy.get('#loginButton').click(); //Нажал Войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик
    
    })
    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

        cy.get('#mail').type('german@dolniko.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click(); //Нажал Войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#messageHeader').should('be.visible');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик
 })

 it('Проверка Валидации,что в логине есть @', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

    cy.get('#mail').type('germandolnikov.ru'); //Ввел логин без @
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click(); //Нажал Войти

    cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
    cy.get('#messageHeader').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик
})
it('Проверка на приведение к строчным буквам в логине', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

    cy.get('#mail').type('GerMan@Dolnikov.ru'); //Строчные буквы
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click(); //Нажал Войти

    cy.get('#messageHeader').contains('Такого логина или пароля нет');
    cy.get('#messageHeader').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик
})

})
 