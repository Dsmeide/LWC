import { createElement } from 'lwc';
import Dm_lwcCustomRecordForm from 'c/dm_lwcCustomRecordForm';

describe('c-dm-lwc-custom-record-form', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-dm-lwc-custom-record-form', {
            is: Dm_lwcCustomRecordForm
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});