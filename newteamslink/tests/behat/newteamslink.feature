@editor @editor_atto @atto @atto_newteamslink @_bug_phantomjs
Feature: Atto newteamslink button
  To format text in Atto, I need to use the newteamslink button.

  @javascript
  Scenario: newteamslink some text
    Given I log in as "admin"
    And I open my profile in edit mode
    And I set the field "Description" to "Badger"
    And I select the text in the "Description" Atto editor
    When I click on "newteamslink" "button"
    And I press "Update profile"
    And I follow "Preferences" in the user menu
    And I follow "Editor preferences"
    And I set the field "Text editor" to "Plain text area"
    And I press "Save changes"
    And I click on "Edit profile" "link" in the "region-main" "region"
    Then I should see "<strong>Badger</strong>"

  @javascript
  Scenario: Unnewteamslink some text
    Given I log in as "admin"
    And I open my profile in edit mode
    And I set the field "Description" to "Mouse"
    And I select the text in the "Description" Atto editor
    When I click on "newteamslink" "button"
    And I click on "newteamslink" "button"
    And I press "Update profile"
    And I follow "Preferences" in the user menu
    And I follow "Editor preferences"
    And I set the field "Text editor" to "Plain text area"
    And I press "Save changes"
    And I click on "Edit profile" "link" in the "region-main" "region"
    Then I should not see "<strong>Mouse</strong>"
    And I should see "Mouse"
