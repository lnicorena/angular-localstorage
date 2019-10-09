import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { VeiculosService } from './veiculos.service';



describe('VeiculosService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [VeiculosService]
  }));

  it('should be created', () => {
    const service: VeiculosService = TestBed.get(VeiculosService);
    expect(service).toBeTruthy();
  });

  it('should have getMarcas function', () => {
    const service: VeiculosService = TestBed.get(VeiculosService);
    expect(service.getMarcas).toBeTruthy();
  });

  it('should have getModelos function', () => {
    const service: VeiculosService = TestBed.get(VeiculosService);
    expect(service.getModelos).toBeTruthy();
  });
    
});
