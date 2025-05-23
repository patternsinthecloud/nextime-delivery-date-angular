import { RequestsDataService } from './requestData.service';
import { AvailableSites } from 'src/app/models/availableSites.dto';
import {
  flatRateRequestDemoData,
  shipperHqRequestDemoData,
  uspsRateRequestDemoData,
  gardenCupRequestDemoData
} from './data';

describe('RequestsDataService', () => {
  let service: RequestsDataService;

  beforeEach(() => {
    service = new RequestsDataService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return flatRateRequestDemoData for FlatRate site', () => {
    const result = service.getSiteRequestData(AvailableSites.FlatRate);
    expect(result).toEqual(flatRateRequestDemoData);
  });

  it('should return shipperHqRequestDemoData for ShipperHQ site', () => {
    const result = service.getSiteRequestData(AvailableSites.ShipperHQ);
    expect(result).toEqual(shipperHqRequestDemoData);
  });

  it('should return uspsRateRequestDemoData for USPS site', () => {
    const result = service.getSiteRequestData(AvailableSites.USPS);
    expect(result).toEqual(uspsRateRequestDemoData);
  });

  it('should return gardenCupRequestDemoData for GardenCup site', () => {
    const result = service.getSiteRequestData(AvailableSites.GardenCup);
    expect(result).toEqual(gardenCupRequestDemoData);
  });

  it('should return flatRateRequestDemoData as default when site is not recognized', () => {
    const result = service.getSiteRequestData(999); // Invalid site ID
    expect(result).toEqual(flatRateRequestDemoData);
  });
});
