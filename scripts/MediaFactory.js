class MediaFactory {
    constructor (media , name){
        if (media.image){
            return new MediaImg (media , name);
        }

        else {
            return new MediaVideo (media , name)
        }
    }
}