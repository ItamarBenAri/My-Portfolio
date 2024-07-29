class FilesServices {
    public GetFileName(src: string): string {
        return src.substring(src.lastIndexOf("/") + 1, 
            src.indexOf(".")) + src.substring(src.lastIndexOf("."));
    }
}

export const filesServices = new FilesServices();