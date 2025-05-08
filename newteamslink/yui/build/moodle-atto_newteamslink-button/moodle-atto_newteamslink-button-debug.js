YUI.add('moodle-atto_newteamslink-button', function (Y, NAME) {

// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/*
 * @package    atto_newteamslink
 * @copyright  2013 Damyon Wiese  <damyon@moodle.com>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

/**
 * @module moodle-atto_newteamslink-button
 */

/**
 * Atto text editor newteamslink plugin.
 *
 * @namespace M.atto_newteamslink
 * @class button
 * @extends M.editor_atto.EditorPlugin
 */

Y.namespace('M.atto_newteamslink').Button = Y.Base.create('button', Y.M.editor_atto.EditorPlugin, [], {
    initializer: function() {
        this.addButton({
            callback: this._togglenewteamslink,
            icon: 'e/newteamslink',
            buttonName: 'newteamslink',  // Correction : chaîne littérale au lieu de variable
            inlineFormat: true,

            // Key code for the keyboard shortcut which triggers this button:
            keys: '66',

            // Watch the following tags and add/remove highlighting as appropriate:
            tags: 'strong, b'
        });
    },
    /**
     * Toggle the newteamslink setting.
     *
     * @method _togglenewteamslink
     * @param {EventFacade} e
     */
   _togglenewteamslink: function() {
    // Obtenir l'éditeur
    var host = this.get('host');
    
    // Obtenir l'élément DOM de l'éditeur
    var editorNode = host.getActiveEditor().getDOMNode();
    
    // Sauvegarder le contenu actuel
    var currentContent = editorNode.innerHTML;
    
    // Ajouter notre texte directement au contenu HTML
    editorNode.innerHTML = currentContent + 'top boris top';
    
    // Dire à l'éditeur que le contenu a été modifié
    host.updateOriginal();
    this.markUpdated();
}
});

}, '@VERSION@', {"requires": ["moodle-editor_atto-plugin"]});
