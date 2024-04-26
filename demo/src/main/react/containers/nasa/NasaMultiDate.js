import React, {useEffect, useState} from "react";
import axios from 'axios';
import Nav from "../../components/nav/Nav";


const XkcdArrayRespEx = () => {

    const mockResp = [
            {"copyright":null,"date":"2007-01-28","explanation":"What lies at the bottom of Hyperion's strange craters?  Nobody knows. To help find out, the robot Cassini spacecraft now orbiting Saturn swooped past the sponge-textured moon in late 2005 and took an image of unprecedented detail.  That image, shown above in false color, shows a remarkable world strewn with strange craters and a generally odd surface.   The slight differences in color likely show differences in surface composition.   At the bottom of most craters lies some type of unknown dark material.  Inspection of the image shows bright features indicating that the dark material might be only tens of meters thick in some places.   Hyperion is about 250 kilometers across, rotates chaotically, and has a density so low that it might house a vast system of caverns inside.","hdurl":"https://apod.nasa.gov/apod/image/0510/hyperion2_cassini_big.jpg","media_type":"image","service_version":"v1","title":"Saturn's Hyperion: A Moon with Odd Craters","url":"https://apod.nasa.gov/apod/image/0510/hyperion2_cassini.jpg"},
            {"copyright":"Anglo-Australian Telescope Board ","date":"1997-01-18","explanation":"The photogenic M16 shown above is composed of a young star cluster associated with a spectacular emission nebulae lined with clouds of interstellar dust.  The gorgeous spectacle lies toward the galactic center region, some 7,000 light years distant in the constellation Serpens. Most of the stars in the cluster can be seen offset just above and to the right of the photograph's center. This type of star cluster is called an \"open\" or \"galactic\" cluster and typically has a few hundred young bright members. The redness of the surrounding emission nebula gas is caused by electrons recombining with hydrogen nuclei, while the dark regions are dust lanes that absorb light from background sources. The dust absorbs so much light it allows astronomers to determine which stars are inside the nebula and which are in the foreground. Stars are forming within the nebula, also known as the Eagle Nebula.","hdurl":"https://apod.nasa.gov/apod/image/m16_aat.gif","media_type":"image","service_version":"v1","title":"M16: Nebula With Star Cluster","url":"https://apod.nasa.gov/apod/image/m16_aat.gif"},
            {"copyright":"Luis Argerich","date":"2013-06-28","explanation":"A Full Perigee Moon rose as the Sun set last Sunday. At its closest to Earth it was, by just a bit, the year's brightest and largest Full Moon also known as a Super Moon. Seen from Punta Piedras, Argentina and the mouth of the Rio de La Plata, near Buenos Aires, the Super Moon's light created this magnificent circular lunar halo. Still, the size of a lunar halo is determined by the geometry of six sided water ice crystals in planet Earth's high, thin clouds. The crystals deflect the rays of moonlight more strongly through a minimum angle of 22 degrees. So this halo has an inner radius of 22 degrees, just like the halos of the less-than-super moons. Even more common than a Super Moon, beautiful 22 degree halos can be spotted at any time of year.","hdurl":"https://apod.nasa.gov/apod/image/1306/june22moonhalo_argerich.jpg","media_type":"image","service_version":"v1","title":"A Super Moon's Halo","url":"https://apod.nasa.gov/apod/image/1306/june22moonhalo_argerich950.jpg"},
            {"copyright":null,"date":"2015-08-16","explanation":"This is the mess that is left when a star explodes.  The Crab Nebula, the result of a supernova seen in 1054 AD, is filled with mysterious filaments.  The filaments are not only tremendously complex, but appear to have less mass than expelled in the original supernova and a higher speed than expected from a free explosion.  The featured image, taken by the Hubble Space Telescope, is presented in three colors chosen for scientific interest.  The Crab Nebula spans about 10 light-years.  In the nebula's very center lies a pulsar: a neutron star as massive as the Sun but with only the size of a small town.  The Crab Pulsar rotates about 30 times each second.   Students (of all ages): See free astronomy lectures online","hdurl":"https://apod.nasa.gov/apod/image/1508/crab_hubble_3864.jpg","media_type":"image","service_version":"v1","title":"M1: The Crab Nebula from Hubble","url":"https://apod.nasa.gov/apod/image/1508/crab_hubble_960.jpg"}
    ]

    return(
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            { mockResp.map((nasa, index) => {
                return(
                    <div className="card col" style={{"width": "18rem"}} key={index}>
                        <img src={nasa.url} className="card-img-top" alt={nasa.hdurl}/>
                        <div className="card-body">
                            <h5 className="card-title">{nasa.title}</h5>
                            <p className="card-text">{nasa.explanation}</p>
                            <a href={nasa.url} className="btn btn-primary">See Image</a>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default XkcdArrayRespEx
