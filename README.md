![GA Logo](https://github.com/generalassembly/ga-ruby-on-rails-for-devs/raw/master/images/ga.png)

<br>

## FIND ME A DOC!

  The idea of this website is to find the nearest doctor based on the input for your zipcode entered. The return results will lists all doctors on a map and list based on distance. Each search inquery will return ten results, with a search radius of ten miles.

  On the backend of the website, the zipcode is converted into longitude and lattitude for API search parameters. That data will be used to pull from BetterDoctor API that lists the closest doctors that are still accepting new patients. Then using MapBox, I rendered the doctor offices as markers on the map. This website pulls data from three API's (Mapbox, Google Map, and BetterDoctor) with access token fully hidden. Google API was used to convert zipcode into longitude and lattitude.

<br>

[For Github: click here](https://git.generalassemb.ly/LifeH/project-2-NEED-A-DOC)

[For Website: click here](https://findadoc.herokuapp.com/)


## Features
Three APIs: Google Maps, Better Doctor, Mapbox

React.js, HTML5, CSS