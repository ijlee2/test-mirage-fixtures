import { visit } from '@ember/test-helpers';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Acceptance | albums', function(hooks) {
    setupApplicationTest(hooks);
    setupMirage(hooks);

    test('The user sees 0 albums', async function(assert) {
        await visit('/');

        assert.dom('[data-test-album]').doesNotExist();
    });

    test('The user sees 2 albums', async function(assert) {
        this.server.loadFixtures();

        await visit('/');

        assert.dom('[data-test-album]').exists({ count: 2 });
    });
});