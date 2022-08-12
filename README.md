## CONTENTS OF THIS FILE

* Introduction
* Requirements
* Installation
* Configuration
* Usage
* Maintainers

## INTRODUCTION

This project integrates the site with the Google Analytics application by adding custom dataLayer events using data attributes
on HTML elements.


## REQUIREMENTS

This project only requires that you have implemented Google Analytics _or_ Google Tag Manager to send custom events to.
This project can be used with the standard implementation following the documentation for Google Analytics and
Google Tag Manager or with contributed modules such as the [Google Analytics module](https://www.drupal.org/project/google_analytics) or
the [Google Tag Manager module](https://www.drupal.org/project/google_tag).

* [Google Analytics](https://analytics.google.com) _**OR**_
* [Google Tag Manager](https://tagmanager.google.com)

## Recommended Modules

* [Google Tag Manager module](https://www.drupal.org/project/google_tag)
* [Google Analytics module](https://www.drupal.org/project/google_analytics)
* [Link Attributes module](https://www.drupal.org/project/link_attributes)

## INSTALLATION

Place the project files in an appropriate modules directory and enable the
module as you would any other contributed module. For further information see:

* https://www.drupal.org/node/895232

## CONFIGURATION

There are no configuration options for this project.

## Usage

To use this module, you simply apply the following data attributes to the HTML elements you wish to track custom events on:

* _data-ga-event_
* _data-ga-category_
* _data-ga-action_
* _data-ga-label_

### Example

```HTML
<a href="https://www.myawesomesite.com/article-123" data-ga-event="ctaClick" data-ga-category="Marketing - Holiday 1" data-ga-action="ctaClick" data-ga-label="Hero | Learn more | Zone 2">Learn more</a>
```

## MAINTAINERS

Current maintainer:

* Ron Ferguson (https://www.drupal.org/u/r0nn1ef)
