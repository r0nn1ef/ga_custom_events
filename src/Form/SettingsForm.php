<?php

namespace Drupal\ga_custom_events\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Class SettingsForm.
 */
class SettingsForm extends ConfigFormBase {

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return [
      'ga_custom_events.settings',
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'settings_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config('ga_custom_events.settings');
    $form['disable_datalayer'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Disable dataLayer'),
      '#description' => $this->t('Check this box to disable dataLayer.push().'),
      '#default_value' => $config->get('disable_datalayer'),
    ];
    $form['enable_debugging'] = [
      '#type' => 'checkbox',
      '#title' => $this->t('Enable debugging'),
      '#description' => $this->t('Check this box to log the tracking object to the javascript console.'),
      '#default_value' => $config->get('enable_debugging'),
    ];
    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    parent::submitForm($form, $form_state);

    $this->config('ga_custom_events.settings')
      ->set('disable_datalayer', $form_state->getValue('disable_datalayer'))
      ->set('enable_debugging', $form_state->getValue('enable_debugging'))
      ->save();
  }

}
