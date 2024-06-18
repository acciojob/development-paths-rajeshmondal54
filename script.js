describe('Verify Development Paths Web Page', () => {
    it('Checks the height of the image', () => {
        cy.visit('http://localhost:3000'); // Replace with your actual local server URL
        cy.get('img')
            .should('have.attr', 'src', 'https://example.com/path/to/your/image.jpg') // Verify image source
            .and('have.attr', 'alt', 'Development Paths Image') // Verify image alt text
            .and('have.css', 'height', '300px'); // Verify image height
    });

    it('Verifies the list of development paths', () => {
        cy.visit('http://localhost:3000'); // Replace with your actual local server URL
        cy.get('ul li')
            .should('have.length', 5) // Ensure there are 5 list items
            .each(($li, index) => {
                const paths = ['Cloud', 'Desktop', 'Video Game', 'Mobile', 'Web']; // Corrected: 'Video Game' instead of 'Video Sport'
                cy.wrap($li).should('have.text', `${paths[index]} development`);
            });
    });
});