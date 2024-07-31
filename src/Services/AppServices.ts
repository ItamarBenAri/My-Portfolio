class AppServices {

    public isEven(num: number): boolean {
        return num % 2 === 0;
    }
}

export const appServices = new AppServices();