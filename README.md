# statice
Statice - A simple yet flexible static site generator
[![Build Status](https://travis-ci.org/andymantell/statice.svg)](https://travis-ci.org/andymantell/statice)

Currently at the planning stage, if you're after a working solution this is not the right place for you. Yet...

## Planned features
## Input
  Should be pluggable and try  not to make assumptions about structure
  
  Should ship with input plugins for:
  
  * Markdown and YAML frontmatter on disk
  * Well documented example of how content might be fed from a REST API, but designed to be modified rather than used as is.
    
## Rendering
  Handlebars
  * Partials, layouts and helpers
  * Ability to define custom helpers
  * Should ship with custom helpers for:
    * ...
      
## Output
  Pluggable
  Should ship with output plugins for
  * Outputting to disk


## Use
Should be a vanilla node module designed to be used programatically, with optional plugins for Grunt and Gulp

Possibly a separate project, but should somehow expose enough hooks and events that a user interface (probably web based) could be developed to monitor and control it (a la Mixture.io).
