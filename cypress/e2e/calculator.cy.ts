describe('Basic commands', () => {
  it('All numbers', () => {
    cy.visit('');

    cy.contains('button', '0').should('be.visible').click();
    cy.contains('button', '1').should('be.visible').click();
    cy.contains('button', '2').should('be.visible').click();
    cy.contains('button', '3').should('be.visible').click();
    cy.contains('button', '4').should('be.visible').click();
    cy.contains('button', '5').should('be.visible').click();
    cy.contains('button', '6').should('be.visible').click();
    cy.contains('button', '7').should('be.visible').click();
    cy.contains('button', '8').should('be.visible').click();
    cy.contains('button', '9').should('be.visible').click();

    cy.get('[data-test="results"]').should('have.value', '0123456789');
  });

  it('Math buttons', () => {
    cy.visit('');

    cy.contains('button', '+').should('be.visible').click();
    cy.get('[data-test="results"]').should('have.value', '+');
    cy.contains('button', '-').should('be.visible').click();
    cy.get('[data-test="results"]').should('have.value', '-');
    cy.contains('button', '/').should('be.visible').click();
    cy.get('[data-test="results"]').should('have.value', '/');
    cy.contains('button', '*').should('be.visible').click();
    cy.get('[data-test="results"]').should('have.value', '*');
  });

  it('AC and CE', () => {
    cy.visit('');

    cy.contains('button', '0').should('be.visible').click();
    cy.contains('button', '1').should('be.visible').click();
    cy.contains('button', '2').should('be.visible').click();
    cy.contains('button', '3').should('be.visible').click();
    cy.contains('button', '4').should('be.visible').click();
    cy.contains('button', '5').should('be.visible').click();
    cy.contains('button', '6').should('be.visible').click();
    cy.contains('button', '7').should('be.visible').click();
    cy.contains('button', '8').should('be.visible').click();
    cy.contains('button', '9').should('be.visible').click();

    cy.get('[data-test="results"]').should('have.value', '0123456789');

    cy.contains('button', 'CE').should('be.visible').click();

    cy.get('[data-test="results"]').should('have.value', '012345678');

    cy.contains('button', 'CE').should('be.visible').click();
    cy.contains('button', 'CE').should('be.visible').click();

    cy.get('[data-test="results"]').should('have.value', '0123456');

    cy.contains('button', 'AC').should('be.visible').click();

    cy.get('[data-test="results"]').should('have.value', '');

  });
});

describe('Sum', () => {
  it('Sum 2 numbers', () => {
    cy.visit('');

    cy.contains('button', '7').should('be.visible').click();
    cy.contains('button', '7').should('be.visible').click();
    cy.contains('button', '+').should('be.visible').click();
    cy.contains('button', '9').should('be.visible').click();
    cy.contains('button', '=').should('be.visible').click();

    cy.get('[data-test="results"]').should('have.value', '86');
  });

  it('Sum many numbers', () => {
    cy.visit('');

    cy.contains('button', '7').should('be.visible').click();
    cy.contains('button', '+').should('be.visible').click();
    cy.contains('button', '9').should('be.visible').click();
    cy.contains('button', '+').should('be.visible').click();
    cy.contains('button', '8').should('be.visible').click();
    cy.contains('button', '+').should('be.visible').click();
    cy.contains('button', '5').should('be.visible').click();
    cy.contains('button', '+').should('be.visible').click();
    cy.contains('button', '6').should('be.visible').click();
    cy.contains('button', '=').should('be.visible').click();

    cy.get('[data-test="results"]').should('have.value', '35');
  });
});

describe('Subtract', () => {
  it('Subtract 2 numbers', () => {
    cy.visit('');

    cy.contains('button', '7').should('be.visible').click();
    cy.contains('button', '-').should('be.visible').click();
    cy.contains('button', '6').should('be.visible').click();
    cy.contains('button', '=').should('be.visible').click();

    cy.get('[data-test="results"]').should('have.value', '1');
  });

  it('Subtract many numbers', () => {
    cy.visit('');

    cy.contains('button', '9').should('be.visible').click();
    cy.contains('button', '-').should('be.visible').click();
    cy.contains('button', '1').should('be.visible').click();
    cy.contains('button', '-').should('be.visible').click();
    cy.contains('button', '2').should('be.visible').click();
    cy.contains('button', '-').should('be.visible').click();
    cy.contains('button', '3').should('be.visible').click();
    cy.contains('button', '=').should('be.visible').click();

    cy.get('[data-test="results"]').should('have.value', '3');
  });

  it('Subtract to negative result', () => {
    cy.visit('');

    cy.contains('button', '1').should('be.visible').click();
    cy.contains('button', '5').should('be.visible').click();
    cy.contains('button', '-').should('be.visible').click();
    cy.contains('button', '2').should('be.visible').click();
    cy.contains('button', '0').should('be.visible').click();
    cy.contains('button', '=').should('be.visible').click();

    cy.get('[data-test="results"]').should('have.value', '-5');
  });
});

describe('Multiply', () => {
  it('Multiply 2 numbers', () => {
    cy.visit('');

    cy.contains('button', '1').should('be.visible').click();
    cy.contains('button', '0').should('be.visible').click();
    cy.contains('button', '*').should('be.visible').click();
    cy.contains('button', '6').should('be.visible').click();
    cy.contains('button', '=').should('be.visible').click();

    cy.get('[data-test="results"]').should('have.value', '60');
  });

  it('Multiply many numbers', () => {
    cy.visit('');

    cy.contains('button', '9').should('be.visible').click();
    cy.contains('button', '*').should('be.visible').click();
    cy.contains('button', '2').should('be.visible').click();
    cy.contains('button', '*').should('be.visible').click();
    cy.contains('button', '1').should('be.visible').click();
    cy.contains('button', '0').should('be.visible').click();
    cy.contains('button', '=').should('be.visible').click();

    cy.get('[data-test="results"]').should('have.value', '180');
  });

  it('Multiply a negative number', () => {
    cy.visit('');

    cy.contains('button', '1').should('be.visible').click();
    cy.contains('button', '0').should('be.visible').click();
    cy.contains('button', '*').should('be.visible').click();
    cy.contains('button', '-').should('be.visible').click();
    cy.contains('button', '5').should('be.visible').click();
    cy.contains('button', '=').should('be.visible').click();

    cy.get('[data-test="results"]').should('have.value', '-50');
  });

  it('Multiply 2 negative number', () => {
    cy.visit('');

    cy.contains('button', '-').should('be.visible').click();
    cy.contains('button', '1').should('be.visible').click();
    cy.contains('button', '0').should('be.visible').click();
    cy.contains('button', '*').should('be.visible').click();
    cy.contains('button', '-').should('be.visible').click();
    cy.contains('button', '5').should('be.visible').click();
    cy.contains('button', '=').should('be.visible').click();

    cy.get('[data-test="results"]').should('have.value', '50');
  });
});

describe('Division', () => {
  it('Division 2 numbers', () => {
    cy.visit('');

    cy.contains('button', '7').should('be.visible').click();
    cy.contains('button', '7').should('be.visible').click();
    cy.contains('button', '/').should('be.visible').click();
    cy.contains('button', '1').should('be.visible').click();
    cy.contains('button', '1').should('be.visible').click();
    cy.contains('button', '=').should('be.visible').click();

    cy.get('[data-test="results"]').should('have.value', '7');
  });

  it('Division many numbers', () => {
    cy.visit('');

    cy.contains('button', '8').should('be.visible').click();
    cy.contains('button', '/').should('be.visible').click();
    cy.contains('button', '2').should('be.visible').click();
    cy.contains('button', '/').should('be.visible').click();
    cy.contains('button', '2').should('be.visible').click();
    cy.contains('button', '=').should('be.visible').click();

    cy.get('[data-test="results"]').should('have.value', '2');
  });

  it('Division per zero', () => {
    cy.visit('');

    cy.contains('button', '8').should('be.visible').click();
    cy.contains('button', '/').should('be.visible').click();
    cy.contains('button', '0').should('be.visible').click();
    cy.contains('button', '=').should('be.visible').click();

    cy.get('[data-test="results"]').should('have.value', 'Infinity');
  });

  it('Division zero per 8', () => {
    cy.visit('');

    cy.contains('button', '0').should('be.visible').click();
    cy.contains('button', '/').should('be.visible').click();
    cy.contains('button', '8').should('be.visible').click();
    cy.contains('button', '=').should('be.visible').click();

    cy.get('[data-test="results"]').should('have.value', '0');
  });
});

describe('Decimals', () => {
  it('Sum 2 decimals', () => {
    cy.visit('');

    cy.contains('button', '1').should('be.visible').click();
    cy.contains('button', '.').should('be.visible').click();
    cy.contains('button', '2').should('be.visible').click();
    cy.contains('button', '+').should('be.visible').click();
    cy.contains('button', '2').should('be.visible').click();
    cy.contains('button', '.').should('be.visible').click();
    cy.contains('button', '6').should('be.visible').click();
    cy.contains('button', '=').should('be.visible').click();

    cy.get('[data-test="results"]').should('have.value', '3.80');
  });

  it('Subtract 2 decimals', () => {
    cy.visit('');

    cy.contains('button', '3').should('be.visible').click();
    cy.contains('button', '.').should('be.visible').click();
    cy.contains('button', '2').should('be.visible').click();
    cy.contains('button', '-').should('be.visible').click();
    cy.contains('button', '2').should('be.visible').click();
    cy.contains('button', '.').should('be.visible').click();
    cy.contains('button', '6').should('be.visible').click();
    cy.contains('button', '=').should('be.visible').click();

    cy.get('[data-test="results"]').should('have.value', '0.60');
  });

  it('Multiply 2 decimals', () => {
    cy.visit('');

    cy.contains('button', '3').should('be.visible').click();
    cy.contains('button', '.').should('be.visible').click();
    cy.contains('button', '2').should('be.visible').click();
    cy.contains('button', '*').should('be.visible').click();
    cy.contains('button', '2').should('be.visible').click();
    cy.contains('button', '.').should('be.visible').click();
    cy.contains('button', '6').should('be.visible').click();
    cy.contains('button', '=').should('be.visible').click();

    cy.get('[data-test="results"]').should('have.value', '8.32');
  });

  it('Divide 2 decimals', () => {
    cy.visit('');

    cy.contains('button', '3').should('be.visible').click();
    cy.contains('button', '.').should('be.visible').click();
    cy.contains('button', '2').should('be.visible').click();
    cy.contains('button', '/').should('be.visible').click();
    cy.contains('button', '2').should('be.visible').click();
    cy.contains('button', '.').should('be.visible').click();
    cy.contains('button', '6').should('be.visible').click();
    cy.contains('button', '=').should('be.visible').click();

    cy.get('[data-test="results"]').should('have.value', '1.23');
  });
});


describe('Errors', () => {
  it('Start with Division', () => {
    cy.visit('');

    cy.contains('button', '/').should('be.visible').click();
    cy.contains('button', '7').should('be.visible').click();
    cy.contains('button', '=').should('be.visible').click();

    cy.get('[data-test="results"]').should('have.value', 'Error');
  });

  it('Start with Multiply', () => {
    cy.visit('');

    cy.contains('button', '*').should('be.visible').click();
    cy.contains('button', '7').should('be.visible').click();
    cy.contains('button', '=').should('be.visible').click();

    cy.get('[data-test="results"]').should('have.value', 'Error');
  });

  it('Start with "0" without a "." following', () => {
    cy.visit('');

    cy.contains('button', '0').should('be.visible').click();
    cy.contains('button', '7').should('be.visible').click();
    cy.contains('button', '+').should('be.visible').click();
    cy.contains('button', '7').should('be.visible').click();
    cy.contains('button', '=').should('be.visible').click();

    cy.get('[data-test="results"]').should('have.value', 'Error');
    cy.contains('button', 'AC').should('be.visible').click();


    cy.contains('button', '7').should('be.visible').click();
    cy.contains('button', '+').should('be.visible').click();
    cy.contains('button', '0').should('be.visible').click();
    cy.contains('button', '7').should('be.visible').click();
    cy.contains('button', '=').should('be.visible').click();

    cy.get('[data-test="results"]').should('have.value', 'Error');
  });

  it('Operation without any number at the end', () => {
    cy.visit('');

    cy.contains('button', '5').should('be.visible').click();
    cy.contains('button', '/').should('be.visible').click();
    cy.contains('button', '=').should('be.visible').click();

    cy.get('[data-test="results"]').should('have.value', 'Error');
    cy.contains('button', 'AC').should('be.visible').click();

    cy.contains('button', '5').should('be.visible').click();
    cy.contains('button', '*').should('be.visible').click();
    cy.contains('button', '=').should('be.visible').click();

    cy.get('[data-test="results"]').should('have.value', 'Error');
    cy.contains('button', 'AC').should('be.visible').click();

    cy.contains('button', '5').should('be.visible').click();
    cy.contains('button', '+').should('be.visible').click();
    cy.contains('button', '=').should('be.visible').click();

    cy.get('[data-test="results"]').should('have.value', 'Error');
    cy.contains('button', 'AC').should('be.visible').click();

    cy.contains('button', '5').should('be.visible').click();
    cy.contains('button', '-').should('be.visible').click();
    cy.contains('button', '=').should('be.visible').click();

    cy.get('[data-test="results"]').should('have.value', 'Error');
  });
});
