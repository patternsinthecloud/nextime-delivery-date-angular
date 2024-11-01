import { AvailableSites } from 'src/app/models/availableSites.dto';
import { NextimeRequest } from 'src/app/models/nextimeRequest.dto';
import { flatRateRequestDemoData, gardenCupRequestDemoData } from './data';

export const SITES_DATA_SERVICE = 'SITES_DATA_SERVICE';

export class RequestsDataService {
  public getSiteRequestData(site: number): NextimeRequest {
    if (site == AvailableSites.FlatRate) return flatRateRequestDemoData;

    if (site == AvailableSites.ShipperHQ) return flatRateRequestDemoData;

    if (site == AvailableSites.USPS) return flatRateRequestDemoData;

    if (site == AvailableSites.GardenCup) return gardenCupRequestDemoData;

    return flatRateRequestDemoData;
  }
}
