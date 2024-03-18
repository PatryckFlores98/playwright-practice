import { expect, type Locator, type Page } from '@playwright/test';

export class automationPage {
  readonly automationPage: Page;
  readonly headerText: Locator;
  readonly nameField: Locator;
  readonly contactMessageField: Locator;
  readonly submitButton: Locator;
  readonly nameField2: Locator;
  readonly contactMessageField2: Locator;
  readonly submitButton2: Locator;
  readonly confirmMessage: Locator;


  constructor(automationPage: Page) {
    this.automationPage = automationPage;
    this.headerText = automationPage.locator('#main-menu');
    this.nameField = automationPage.locator('#et_pb_contact_name_0');
    this.contactMessageField = automationPage.locator('#et_pb_contact_message_0');
    this.submitButton = automationPage.locator('#et_pb_contact_form_0 > div.et_pb_contact > form > div > button');
    this.nameField2 = automationPage.locator('#et_pb_contact_name_1');
    this.contactMessageField2 = automationPage.locator('#et_pb_contact_message_1');
    this.submitButton2 = automationPage.locator('#et_pb_contact_form_1 > div.et_pb_contact > form > div > button');
    this.confirmMessage = automationPage.locator('#et_pb_contact_form_0');
  }

  async goto() {
    await this.automationPage.goto('https://ultimateqa.com/filling-out-forms/');
  }
}